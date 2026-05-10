"use client";

import { FloppyDisk } from "@gravity-ui/icons";
import {
  Form,
  Button,
  FieldError,
  FieldGroup,
  Fieldset,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";

export default function NewUserPage() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newUser = Object.fromEntries(formData.entries());
    console.log(newUser);

    const req = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const res = await req.json();
    console.log(res);

    if (res.success) {
      alert("user is successfully added!");
      redirect("/users");
    }
  };
  return (
    <div className="w-96 mx-auto mt-10 bg-gray-200 p-8 rounded">
      <Form onSubmit={onSubmit}>
        <Fieldset>
          <Fieldset.Legend>Create New User</Fieldset.Legend>
          <FieldGroup>
            <TextField
              isRequired
              name="name"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }

                return null;
              }}
            >
              <Label>Name</Label>
              <Input placeholder="John Doe" />
              <FieldError />
            </TextField>
            <TextField isRequired name="email" type="email">
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>
          </FieldGroup>
          <Fieldset.Actions>
            <Button type="submit">
              <FloppyDisk />
              Create User
            </Button>
            <Button type="reset" variant="secondary">
              Cancel
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>
    </div>
  );
}
