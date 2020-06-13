import http from "../http-common";

class PostDataService {
  async getAll() {
    await  http.get("/posts");
  }

  async get(id) {
    await  http.get(`/posts/${id}`);
  }

  async create(data) {
    await http.post("/posts", data);
  }

  async update(id, data) {
    await http.put(`/posts/${id}`, data);
  }

  async delete(id) {
    await http.delete(`/posts/${id}`);
  }

}

export default new PostDataService();