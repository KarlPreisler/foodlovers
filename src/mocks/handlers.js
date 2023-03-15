import { rest } from "msw";

const baseURL = "https://food-lovers.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 6,
        username: "Therese",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 6,
        profile_image: "https://res.cloudinary.com/dlorcehfq/image/upload/v1/media/https://res.cloudinary.com/dlorcehfq/image/upload/v1678551729/default_profile_y7itwz.jpg"
        })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];