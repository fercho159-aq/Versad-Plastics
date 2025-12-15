import { Factory } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
    className?: string;
}

const Logo = ({ className }: LogoProps) => {
    return (
        <div className={cn("flex items-center gap-2 font-bold text-primary", className)}>
            <Factory className="h-7 w-7" />
            <span className="text-2xl">Versad Plastics</span>
        </div>
    );
};

export default Logo;
