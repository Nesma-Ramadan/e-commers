"use client"

interface ButtonProps {
  tittel?: string;
  icone?: React.ReactNode
  size: 'sm' | 'md' | 'lg' | 'tex' | 'icone';
  className?: string;
  type: 'primary' | 'secondary';
  click?: React.MouseEventHandler<HTMLButtonElement>; // إضافة خاصية الحدث

}

const buttonStyles = {
  primary: {
    sm: 'py-2 px-4 bg-[#FF8E00] border-2 border-[#FF8E00] text-white rounded-md font-medium hover:bg-[#e87700] transition-colors duration-300 cursor-pointer',
    md: 'py-3 px-6 bg-[#FF8E00] border-2 border-[#FF8E00] text-white rounded-md font-semibold hover:bg-[#e87700] transition-colors duration-300 cursor-pointer',
    lg: 'py-4 px-8 bg-[#FF8E00] border-2 border-[#FF8E00] text-white rounded-md font-bold hover:bg-[#e87700] transition-colors duration-300 cursor-pointer',
    tex: 'p-0 bg-transparent text-[#FF8E00]  font-bold hover:text-[#e87700] transition-colors duration-300 cursor-pointer',
    icone: 'p-2 bg-[#FF8E00]  rounded-full hover:bg-[#e87700] transition-colors duration-300 cursor-pointer w-10 h-10 flex items-center justify-center',
  },
  secondary: {
    sm: 'py-2 px-4  text-[#FF8E00] border-2 border-[#FF8E00] rounded-md font-medium hover:bg-[#FFF3E0] transition-colors duration-300 cursor-pointer',
    md: 'py-3 px-6  text-[#FF8E00] border-2 border-[#FF8E00] rounded-md font-semibold hover:bg-[#FFF3E0] transition-colors duration-300 cursor-pointer',
    lg: 'py-4 px-8  text-[#FF8E00] border-2 border-[#FF8E00] rounded-md font-bold hover:bg-[#FFF3E0] transition-colors duration-300 cursor-pointer',
    tex: 'py-4 px-8  text-[#FF8E00]   font-bold hover:text-[#FFF3E0] transition-colors duration-300 cursor-pointer',
    icone: 'p-2  text-[#FF8E00] border-2 border-[#FF8E00] rounded-full hover:bg-[#FFF3E0] transition-colors duration-300 cursor-pointer',
  }
};
export default function Button({ tittel, icone, size, type, className, click }: ButtonProps) {

  const typeStyles = buttonStyles[type] || buttonStyles.primary;
  const style = typeStyles[size] || typeStyles.md;
  const combinedClass = `${style} ${className ?? ""}`;

  return (
    <button className={combinedClass} onClick={click}>
      {tittel ? tittel : icone}
    </button>
  );
}
