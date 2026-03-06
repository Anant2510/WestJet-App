interface Window {
  adobe: any; // Or a more specific type if you have one for the adobe object
}
interface AdobeTargetOfferResponse {
  result?: {
    content?: string;
    // Add other properties you might use from the response
  };
  // Add other top-level properties you might use from the response
}

interface Window {
  adobe: {
    target: {
      getOffer: (options: {
        mbox: string;
        success: (response: AdobeTargetOfferResponse) => void;
        error: (error: any) => void; // You can define a more specific type for error if needed
      }) => void;
      applyOffer: (options: {
        selector?: string; // Or the appropriate type for applying the offer
        content?: string; // Or the appropriate type for applying the offer
        response?: AdobeTargetOfferResponse;
        // Add other properties for applyOffer
      }) => void;
      // Add other target methods you might use
    };
    // Add other adobe properties you might use
  };
}
