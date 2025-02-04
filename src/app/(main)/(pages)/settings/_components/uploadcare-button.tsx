'use client'; // Required if using React Server Components
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';
import { useRouter } from 'next/navigation';

type Props = {
  onUpload?: (cdnUrl: string) => Promise<any>;
};

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter();

  const handleFileUploadSuccess = (file: any) => {
    if (file && onUpload) {
      onUpload(file.cdnUrl).then(() => {
        router.refresh(); // Refresh the page or update the UI
      });
    }
  };

  return (
    <div>
      <FileUploaderRegular
        pubkey="a9428ff5ff90ae7a64eb" // Replace with your Uploadcare public key
        onFileUploadSuccess={handleFileUploadSuccess}
        sourceList="local, camera, facebook, gdrive" // Specify allowed sources
        cameraModes="video, photo" // Allow both video and photo from the camera
        classNameUploader="uc-light" // Apply a light theme
      />
    </div>
  );
};

export default UploadCareButton;