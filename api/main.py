from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import openai
import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

# openai.organization = "org-Hz3NVSoiYXLROi1jFcp14Gzg"
openai.api_key = os.getenv("CHATGPT_KEY")

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Person(BaseModel):
    name: str
    skills: List[str]

class Project(BaseModel):
    people: List[Person]
    name: str
    purpose: str
    features: str
    audience: str
    requirements: str
    comments: str

def get_prompt(project: Project) -> str:
    prompt = "Based on the following information of a software project, generate a list of tasks to develop the project. Then, from the list of persons in the team, assign these tasks equally to the team, based on each person set of skills. The response must only contain the data in a JSON object style, as an array of this object: {\"task\": <string>, \"assignee\": <string>}. Please do not add any explanation or title, only the array. \n\n" + \
    "Project Information:\n\
    • Purpose of the project: " + project.purpose + \
    "\n • Key Features of the project: " + project.features + \
    "\n • Target Audience of the project: " + project.audience + \
    "\n • Technical Requirements: " + project.requirements + \
    "\n • Additional Comments: " + project.comments + \
    "\n\n Team Members and Skillset:\n"
    for person in project.people:
        prompt += f"• {person.name}: {','.join(person.skills)}\n"

    return prompt

def ask_chatgpt(prompt: str) -> str:
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
                {"role": "system", "content": "You are a chatbot"},
                {"role": "user", "content": prompt},
            ]
    )

    result = ''
    for choice in response.choices:
        result += choice.message.content

    return list(eval(result))



@app.post("/")
async def create_project(project: Project):
    prompt = get_prompt(project)
    return {
        "name": project.name,
        "tasks": ask_chatgpt(prompt),
    }
