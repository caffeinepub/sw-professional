import { Button } from '@/components/ui/button';

export function TopNav() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/assets/generated/sw-professional-logo.dim_512x512.png" 
            alt="SW PROFESSIONAL" 
            className="h-12 w-12 object-contain"
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">SW PROFESSIONAL</h1>
            <p className="text-xs text-muted-foreground">Premium Hair Care</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-2">
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('shampoo')}
            className="text-sm font-medium"
          >
            Shampoo
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('hair-mask')}
            className="text-sm font-medium"
          >
            Hair Mask
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('hair-serum')}
            className="text-sm font-medium"
          >
            Hair Serum
          </Button>
        </nav>
      </div>
    </header>
  );
}
