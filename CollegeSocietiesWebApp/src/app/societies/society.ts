export interface Society {
  _id?: string;
  name?: string;
  description: string;
  events: string[];
  members: string[];
  contactEmail: string;
  pictureUrl?: string;
  imageData?: string; // Add imageData property
}



  
  const newSociety: Society = {
    name: 'New Society', // You can change this to accept user input
    description: '', // Example of a required property
    events: [], // Example of a required property as an array
    members: [], // Example of a required property as an array
    contactEmail: '' // Example of a required property
    // Add other required properties as needed
  };
  