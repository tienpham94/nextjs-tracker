export const habitsResolvers = {
  Query: {
    async habits() {
      console.log("habits");
      return [
        {
          _id: "some array",
          name: "make my bed"
        }
      ];
    }
  }
};
