//import elysia
import { Elysia, t } from "elysia";

//import controller
import {
  getPosts,
  createPost,
  getPostById,
} from "../controllers/PostController";

const Routes = new Elysia({ prefix: "/posts" })

  //route get all posts
  .get("/", () => getPosts())

  //route create post
  .post(
    "/",
    ({ body }) => createPost(body as { title: string; content: string }),
    {
      body: t.Object({
        title: t.String({
          minLength: 3,
          maxLength: 100,
        }),
        content: t.String({
          minLength: 3,
          maxLength: 1000,
        }),
      }),
    }
  )

  //route get post by id
  .get("/:id", ({ params: { id } }) => getPostById(id));

export default Routes;
