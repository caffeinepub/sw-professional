import { TopNav } from './components/TopNav';
import { ProductCard } from './components/ProductCard';
import { ProductDetailsSection } from './components/ProductDetailsSection';
import { useGetProducts } from './hooks/useQueries';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

function App() {
  const { data: products, isLoading } = useGetProducts();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const productImages: Record<number, string> = {
    1: '/assets/generated/product-shampoo.dim_1024x1024.png',
    2: '/assets/generated/product-hair-mask.dim_1024x1024.png',
    3: '/assets/generated/product-hair-serum.dim_1024x1024.png',
  };

  const productSectionIds: Record<number, string> = {
    1: 'shampoo',
    2: 'hair-mask',
    3: 'hair-serum',
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-10" />
        <img 
          src="/assets/generated/sw-professional-hero.dim_1600x900.png" 
          alt="SW PROFESSIONAL Hero"
          className="w-full h-[500px] md:h-[600px] object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container text-center space-y-6 px-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground drop-shadow-lg">
              Transform Your Hair
            </h2>
            <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto drop-shadow">
              Experience professional-grade hair care designed to reduce hair fall, 
              smooth every strand, and strengthen your scalp for healthier, more beautiful hair.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Promise</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              SW PROFESSIONAL delivers three essential benefits for complete hair transformation
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center space-y-3 p-6 rounded-lg bg-card">
              <div className="text-4xl font-bold text-primary">0</div>
              <h4 className="text-xl font-semibold">Level Hair Fall</h4>
              <p className="text-sm text-muted-foreground">
                Advanced formula targets hair fall at the root, promoting stronger, healthier growth
              </p>
            </div>
            
            <div className="text-center space-y-3 p-6 rounded-lg bg-card">
              <div className="text-4xl font-bold text-primary">✨</div>
              <h4 className="text-xl font-semibold">Smooth Hair</h4>
              <p className="text-sm text-muted-foreground">
                Deep conditioning technology transforms rough, frizzy hair into silky smooth strands
              </p>
            </div>
            
            <div className="text-center space-y-3 p-6 rounded-lg bg-card">
              <div className="text-4xl font-bold text-primary">💪</div>
              <h4 className="text-xl font-semibold">Strong Scalp</h4>
              <p className="text-sm text-muted-foreground">
                Nourishing ingredients fortify your scalp and hair from within for lasting strength
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Products Overview Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Products</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our complete range of professional hair care solutions
            </p>
          </div>
          
          {isLoading ? (
            <div className="grid gap-8 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="aspect-square w-full" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-3">
              {products?.map((product) => (
                <ProductCard
                  key={Number(product.id)}
                  product={product}
                  imageSrc={productImages[Number(product.id)]}
                  onLearnMore={() => scrollToSection(productSectionIds[Number(product.id)])}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Separator />

      {/* Product Details Sections */}
      {!isLoading && products?.map((product) => (
        <ProductDetailsSection
          key={Number(product.id)}
          product={product}
          imageSrc={productImages[Number(product.id)]}
          sectionId={productSectionIds[Number(product.id)]}
        />
      ))}

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12 mt-16">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center gap-2">
              <img 
                src="/assets/generated/sw-professional-logo.dim_512x512.png" 
                alt="SW PROFESSIONAL" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold">SW PROFESSIONAL</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Premium hair care solutions for healthier, stronger, and more beautiful hair
            </p>
            <Separator className="w-24" />
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} SW PROFESSIONAL. Built with ❤️ using{' '}
              <a 
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
