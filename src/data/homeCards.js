/**
 * Home page card images & names.
 * Matched by question id from src/data/questions.js
 */
const homeCards = {
  1: {
    name: "BMW",
    image:
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80",
  },
  2: {
    name: "Mercedes",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
  },
  3: {
    name: "Porsche",
    image:
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80",
  },
  4: {
    name: "Ferrari",
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
  },
  5: {
    name: "Tesla",
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80",
  },
  6: {
    name: "Audi",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
  },
  7: {
    name: "BMW M",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
  },
  8: {
    name: "Lamborghini",
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&q=80",
  },
  9: {
    name: "Chevrolet",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
  },
  10: {
    name: "Ford Mustang",
    image:
      "https://images.unsplash.com/photo-1547744152-14d985cb937f?w=800&q=80",
  },
  11: {
    name: "Classic Muscle",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
  },
  12: {
    name: "Porsche 911",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  },
};

const fallbackImage =
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80";

export function getCardMeta(id) {
  return (
    homeCards[id] || {
      name: `Topic ${id}`,
      image: fallbackImage,
    }
  );
}

export default homeCards;
