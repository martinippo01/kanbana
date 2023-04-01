from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import openai

openai.api_key = "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"

app = FastAPI()

class Person(BaseModel):
    name: str
    skills: List[str]

class Project(BaseModel):
    people: List[Person]
    name: str
    description: List[str]

@app.post("/")
async def create_project(project: Project):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
                {"role": "system", "content": "You are a chatbot"},
                {"role": "user", "content": "Why should DevOps engineer learn kubernetes?"},
            ]
    )

    result = ''
    for choice in response.choices:
        result += choice.message.content

    print(result)
    return project
