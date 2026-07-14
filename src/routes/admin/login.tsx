import { useState } from "react"
import { createFileRoute, useNavigate } from "@tanstack/react-router"
import { useMutation } from "@tanstack/react-query"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { Button } from "@/components/atoms/Button"
import { KodeinLogo } from "@/components/atoms/KodeinLogo"
import loginUser from "@/api/auth/loginUser"
import { setTokens } from "@/api/auth/tokenStore"

export const Route = createFileRoute('/admin/login')({
    component: Login,
})

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const loginMutate = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            setTokens(data.token, data.refreshToken)
            // TODO: arahkan ke halaman kelola materi begitu dibuat.
            navigate({ to: '/admin/create_materi' })
        },
    })

    const inputClass =
        "w-full border-2 border-line bg-abyss px-3 py-2.5 text-sm text-foam placeholder:text-mist outline-none focus:bg-surf/20"

    return (
        <div className="mx-auto flex min-h-[70vh] w-full max-w-md items-center px-6 pt-20">
            <div className="w-full border-2 border-line bg-tide p-8 shadow-brutal-lg">
                <div className="flex flex-col items-center gap-2 text-center">
                    <KodeinLogo className="h-12 w-auto" />
                    <h1 className="font-display text-2xl font-bold text-foam">Masuk ke koDein</h1>
                    <p className="text-sm text-mist">Login admin untuk mengelola materi.</p>
                </div>

                <form
                    className="mt-8 flex flex-col gap-4"
                    onSubmit={(e) => {
                        e.preventDefault()
                        loginMutate.mutate({ email, password })
                    }}
                >
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-sm font-medium text-mist">
                            Email
                        </label>
                        <input
                            id="email"
                            required
                            type="email"
                            autoComplete="email"
                            placeholder="kamu@email.com"
                            className={inputClass}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="password" className="text-sm font-medium text-mist">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                required
                                type={showPassword ? "text" : "password"}
                                autoComplete="current-password"
                                placeholder="••••••••"
                                className={`${inputClass} pr-10`}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((v) => !v)}
                                aria-label={showPassword ? "Sembunyikan password" : "Lihat password"}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-mist hover:text-foam"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    {loginMutate.isError && (
                        <p className="border-2 border-line bg-red-100 px-3 py-2 text-sm font-medium text-red-700">
                            {loginMutate.error?.message || 'Login gagal. Coba lagi.'}
                        </p>
                    )}

                    <Button
                        type="submit"
                        disabled={loginMutate.isPending}
                        className="mt-2 w-full"
                    >
                        {loginMutate.isPending ? 'Memproses...' : 'Login'}
                    </Button>
                </form>
            </div>
        </div>
    )
}
