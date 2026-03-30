export const getBadgeColor = (rating: number): string => {
  if (rating >= 7) return '#16a34a';
  if (rating >= 5) return '#facc15'; 
  return '#dc2626';                
};