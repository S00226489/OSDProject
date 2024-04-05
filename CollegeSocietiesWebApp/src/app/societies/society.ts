export interface Society {
    _id?: string;
    name: string;
    description: string;
    events: string[]; // Assuming events are referenced by their IDs. Adjust according to your actual data structure.
    members: string[]; // Assuming members are referenced by their IDs. Adjust as necessary.
    contactEmail: string;
  }
  