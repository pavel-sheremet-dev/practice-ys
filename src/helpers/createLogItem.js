import { faker } from "@faker-js/faker";

export const createLogItem = () => {
  const date = faker.date.anytime();
  const end = new Date(date).setHours(
    new Date(date).getHours() + faker.number.int({ min: 1, max: 8 })
  );
  return {
    id: faker.string.uuid(),
    date: date.toISOString(),
    username: faker.internet.userName(),
    start: date.toISOString(),
    end: new Date(end).toISOString(),
  };
};
