const dtoParams = {
  user: {
    firstname: {
      MIN_LENGTH: 2,
      MAX_LENGTH: 50,
    },
    lastname: {
      MIN_LENGTH: 2,
      MAX_LENGTH: 50,
    },
    avatar: {
      MAX_LENGTH: 150,
    },
    password: {
      MIN_LENGTH: 6,
    }
  },
  comment: {
    text: {
      MIN_LENGTH: 20,
      MAX_LENGTH: 1000,
    },
    rating: {
      MIN_VALUE: 1,
      MAX_VALUE: 5,
    }
  },
  film: {
    description: {
      MIN_LENGTH: 20,
      MAX_LENGTH: 1000,
    },
    source: {
      MIN_LENGTH: 2,
      MAX_LENGTH: 150,
    },
    title: {
      MIN_LENGTH: 2,
      MAX_LENGTH: 150,
    },
  },
  genre: {
    title: {
      MIN_LENGTH: 2,
      MAX_LENGTH: 40,
    }
  },
  person: {
    firstname: {
      MIN_LENGTH: 2,
      MAX_LENGTH: 50,
    },
    lastname: {
      MIN_LENGTH: 2,
      MAX_LENGTH: 50,
    },
  },
};

export default dtoParams;
