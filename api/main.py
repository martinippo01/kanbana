from fastapi import FastAPI

app = FastAPI()

@app.post("/users")
async def create_user():
    pass

@app.get("/users")
async def read_users():
    pass

@app.get("/users/{user_id}")
async def read_user(user_id: int):
    pass

@app.put("/users/{user_id}")
async def update_user(user_id: int):
    pass

@app.post("/users/{user_id}/skills")
async def add_skill(user_id: int):
    pass

@app.delete("/users/{user_id}/skills/{skill_id}")
async def delete_skill(user_id: int, skill_id: int):
    pass

@app.post("/projects")
async def create_project():
    pass

@app.post("/projects/{project_id}/tasks")
async def create_task(project_id: int):
    pass

@app.get("/projects/{project_id}/tasks/{task_id}")
async def update_task(project_id: int, task_id: int):
    pass
