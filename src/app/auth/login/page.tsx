import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "./_components/LoginForm";

export default function LoginPage() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="text-center space-y-3">
        <CardTitle className="text-primary">Inventory App</CardTitle>
        <CardDescription>
          Ingresa tus credenciales para acceder al sistema de inventariado.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
}
