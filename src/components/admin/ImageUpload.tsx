'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { createClientComponent } from '@/lib/supabase/client';

interface ImageUploadProps {
  onUpload: (url: string) => void;
  currentImage?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onUpload, currentImage }) => {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(currentImage || null);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClientComponent();

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    // Vérifier la taille (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Le fichier est trop volumineux (max 5MB).');
      setUploading(false);
      return;
    }

    // Vérifier le type
    if (!file.type.startsWith('image/')) {
      setError('Le fichier doit être une image (PNG, JPG, WEBP).');
      setUploading(false);
      return;
    }

    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
    
    const { data, error: uploadError } = await supabase.storage
      .from('projects')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      setError(`Erreur d'upload : ${uploadError.message}`);
      setUploading(false);
      return;
    }

    // Essayer d'abord l'URL publique
    const { data: urlData } = supabase.storage
      .from('projects')
      .getPublicUrl(data.path);

    const publicUrl = urlData.publicUrl;
    
    // Vérifier que l'URL est accessible
    try {
      const response = await fetch(publicUrl, { method: 'HEAD' });
      if (!response.ok) {
        // Si l'URL publique ne fonctionne pas, essayer une signed URL
        const { data: signedData, error: signedError } = await supabase.storage
          .from('projects')
          .createSignedUrl(data.path, 60 * 60 * 24 * 365); // 1 an
        
        if (signedError || !signedData) {
          setError('Le fichier est uploadé mais l\'URL n\'est pas accessible. Vérifiez que le bucket est public.');
          setUploading(false);
          return;
        }
        
        setPreview(signedData.signedUrl);
        onUpload(signedData.signedUrl);
      } else {
        setPreview(publicUrl);
        onUpload(publicUrl);
      }
    } catch (err) {
      console.error('URL check error:', err);
      setPreview(publicUrl);
      onUpload(publicUrl);
    }
    
    setUploading(false);
  };

  return (
    <div>
      <label className="block text-sm text-gray-400 mb-2">Image du projet</label>
      <div className="border-2 border-dashed border-dark-600 rounded-xl p-6 text-center hover:border-gold-500/50 transition-colors cursor-pointer">
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="hidden"
          id="image-upload"
          disabled={uploading}
        />
        <label htmlFor="image-upload" className="cursor-pointer">
          {preview ? (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <Image src={preview} alt="Preview" fill className="object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-dark-900/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-sm">Changer l'image</span>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <svg className="w-10 h-10 text-gray-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500 text-sm">
                {uploading ? 'Upload en cours...' : 'Cliquez pour uploader une image'}
              </p>
              <p className="text-gray-600 text-xs">PNG, JPG, WEBP • Max 5MB</p>
            </div>
          )}
        </label>
      </div>
      
      {error && (
        <p className="mt-2 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
};

export default ImageUpload;