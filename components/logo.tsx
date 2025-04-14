import { Cpu, Zap } from "lucide-react"
import Image from "next/image"

export function RoboticsLogo({
  className = "",
  size = "md",
  logoPath = "/images/roboticsclub.jpg", // Default path that can be easily changed
}: {
  className?: string
  size?: "sm" | "md" | "lg"
  logoPath?: string
}) {
  const sizeClasses = {
    sm: "size-8",
    md: "size-10",
    lg: "size-16",
  }

  // Check if logoPath is provided and valid
  const hasCustomLogo = logoPath && logoPath !== "/images/robotics-logo.png"

  return (
    <div
      className={`${sizeClasses[size]} rounded-lg overflow-hidden bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground ${className}`}
    >
      {hasCustomLogo ? (
        // Use the provided logo image
        <Image
          src={logoPath || "/placeholder.svg"}
          alt="Robotics & AI Club Logo"
          width={sizeClasses[size].replace("size-", "")}
          height={sizeClasses[size].replace("size-", "")}
          className="w-full h-full object-cover"
        />
      ) : (
        // Use the default robot head design
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Robot head shape */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[70%] h-[75%] rounded-t-lg bg-primary-foreground/20"></div>
          </div>

          {/* Eyes */}
          <div className="absolute top-[30%] left-[30%] w-[10%] h-[10%] rounded-full bg-primary-foreground"></div>
          <div className="absolute top-[30%] right-[30%] w-[10%] h-[10%] rounded-full bg-primary-foreground"></div>

          {/* Circuit lines */}
          <div className="absolute top-[50%] left-[25%] w-[50%] h-[2px] bg-primary-foreground/70"></div>
          <div className="absolute top-[60%] left-[35%] w-[30%] h-[2px] bg-primary-foreground/70"></div>

          {/* CPU icon */}
          <Cpu className="absolute bottom-[20%] size-[40%] text-primary-foreground/90" />

          {/* Energy bolt */}
          <Zap className="absolute top-[15%] right-[15%] size-[15%] text-yellow-300" />
        </div>
      )}
    </div>
  )
}

