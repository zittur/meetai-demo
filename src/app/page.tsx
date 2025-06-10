"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Home() {
    const {
        data: session, //refetch the session
    } = authClient.useSession();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = () => {
        authClient.signUp.email(
            { email, password, name },
            {
                onSuccess: () => {
                    window.alert("Sign up successful");
                },
                onError: () => {
                    window.alert("Sign up failed");
                },
            }
        );
    };

    const onLogin = () => {
        authClient.signIn.email(
            { email, password },
            {
                onSuccess: () => {
                    window.alert("Sign in successful");
                },
                onError: () => {
                    window.alert("Sign in failed");
                },
            }
        );
    };

    if (session) {
        return (
            <div className="flex flex-col items-center justify-center h-screen gap-4">
                <h1 className="text-2xl font-bold">
                    Logged in {session.user?.name}, {session.user?.email}
                </h1>
                <Button onClick={() => authClient.signOut()}>Sign Out</Button>
            </div>
        );
    }

    return (
        <div className="flex flex-row items-center justify-center h-screen gap-4">
            <div className="p-4 flex flex-col items-center justify-center h-screen gap-4">
                <Input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={onSubmit}>Sign Up</Button>
            </div>
            <div className="p-4 flex flex-col items-center justify-center h-screen gap-4">
                <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={onLogin}>Login</Button>
            </div>
        </div>
    );
}
