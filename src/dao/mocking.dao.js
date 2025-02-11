export const generateMockUsers = (count = 5) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: `MockUser${i + 1}`,
      email: `mockuser${i + 1}@mail.com`,
    }));
  };
  
  export const generateMockPets = (count = 5) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: `MockPet${i + 1}`,
      type: 'Dog',
    }));
  };
  