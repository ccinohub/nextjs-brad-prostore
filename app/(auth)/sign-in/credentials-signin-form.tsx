'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInDefaultValues } from "@/lib/constants";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signInWithCredentials } from "@/lib/actions/user.actions";

const SignInButton = () => {
    const { pending } = useFormStatus();

    return (
        <Button disabled={pending} className="w-full" variant='default'>
            { pending ? "Signing In..." : 'Sign In' }
        </Button>
    )
}

const CredentialsSignInForm = () => {
    const [ data, action ] = useActionState(signInWithCredentials, {
        success: false,
        message: ''
    })

    return <form action={action}>
        <div className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required autoComplete="email" defaultValue={signInDefaultValues.email}></Input>
            </div>

            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required autoComplete="password" defaultValue={signInDefaultValues.password}></Input>
            </div>

            <div>
                {/* <Button className="w-full" variant='default'>Sign In</Button> */}
                <SignInButton/>
            </div>

            { data && !data.success && (
                <div className="text-center text-destructive">
                    {data.message}
                </div>
            )}

            <div>
                <div className="text-sm text-center text-muted-foreground">
                    Don&apos;t have an account?{' '}
                    <Link href="/sign-up" target="_self" className="link">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    </form>;
}
 
export default CredentialsSignInForm;