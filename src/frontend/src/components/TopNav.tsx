import { Button } from '@/components/ui/button';

export function TopNav() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/98 backdrop-blur supports-[backdrop-filter]:bg-background/95">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-card/80 p-1.5 rounded-lg border border-border/50">
            <img 
              src="/assets/generated/sw-professional-logo.dim_512x512.png" 
              alt="SW PROFESSIONAL" 
              className="h-10 w-10 object-contain"
            />
          </div>
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
