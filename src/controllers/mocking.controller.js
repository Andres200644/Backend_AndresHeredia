export const generateMockUsers = (req, res) => {
  const count = req.query.count || 5;
  const mockUsers = Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `User${i + 1}`,
    email: `user${i + 1}@mail.com`,
  }));
  res.json(mockUsers);
};

export const generateMockPets = (req, res) => {
  const count = req.query.count || 5;
  const mockPets = Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Pet${i + 1}`,
    type: 'Dog',
  }));
  res.json(mockPets);
};
