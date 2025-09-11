export interface PhotosProps {
  images: string[];
  onImageClick?: (src: string, index: number) => void;
}
