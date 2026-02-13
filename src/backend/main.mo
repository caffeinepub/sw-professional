import Array "mo:core/Array";

actor {
  type Product = {
    id : Nat;
    name : Text;
    shortDescription : Text;
    benefits : [Text];
    howToUse : Text;
    cta : Text;
  };

  let products : [Product] = [
    {
      id = 1;
      name = "Cosmetic Hair Shampoo";
      shortDescription = "A gentle shampoo that reduces hair fall and strengthens scalp health.";
      benefits = [
        "Reduces hair fall",
        "Strengthens scalp",
        "Smoother hair",
      ];
      howToUse = "Apply to wet hair, lather, and rinse thoroughly. Use daily or as needed.";
      cta = "Learn more about how to use our shampoo!";
    },
    {
      id = 2;
      name = "Hair Mask";
      shortDescription = "Deep conditioning mask for smooth, frizz-free hair.";
      benefits = [
        "Deep conditioning",
        "Frizz reduction",
        "Enhances hair smoothness",
      ];
      howToUse = "Apply to clean, damp hair. Leave on for 5-10 minutes, then rinse.";
      cta = "Discover how our hair mask can help your hair!";
    },
    {
      id = 3;
      name = "Hair Serum";
      shortDescription = "Lightweight serum for added shine and moisture.";
      benefits = [
        "Adds shine",
        "Moisturizes hair",
        "Lightweight formula",
      ];
      howToUse = "Apply a small amount to damp or dry hair, focusing on ends.";
      cta = "See the difference with our hair serum!";
    },
  ];

  public query ({ caller }) func getProducts() : async [Product] {
    products;
  };

  public query ({ caller }) func getProductById(id : Nat) : async ?Product {
    let filtered = products.filter(func(product) { product.id == id });
    if (filtered.size() > 0) { ?filtered[0] } else { null };
  };
};
