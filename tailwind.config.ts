import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sora: ['Sora', 'Montserrat', 'sans-serif'],
				inter: ['Inter', 'system-ui', 'sans-serif'],
				display: ['Sora', 'Montserrat', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Solari brand tokens (HSL-backed)
				brand: {
					dark: 'hsl(var(--brand-dark))',      // #14261C
					primary: 'hsl(var(--brand-primary))',// #2D5A27
					accent: 'hsl(var(--brand-accent))',  // #00A3AD
					cream: 'hsl(var(--brand-cream))',    // #F4F1EA
				},
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                // Cores da PRISMA
                prisma: {
                    green: {
                        DEFAULT: '#2A6F47', // Verde Primário (PRISMA)
                        light: '#4A8F67',
                        dark: '#1A4F37',
                    },
                    blue: {
                        DEFAULT: '#0077C2', // Azul Secundário (SOLUÇÕES)
                        light: '#2597E2',
                        dark: '#0057A2',
                    },
                    yellow: {
                        DEFAULT: '#FDB813', // Amarelo/Dourado de Destaque
                        light: '#FDC843',
                        dark: '#DA9803',
                    },
                    gray: {
                        text: '#333333', // Cinza escuro para texto
                        light: '#F8F9FA', // Fundo cinza claro
                    }
                },
                // Refined eco colors palette for 2025 design
                eco: {
                    green: {
                        light: '#8EB69B', // Softer sage green
                        DEFAULT: '#3B7D59', // Rich moss green
                        dark: '#2B5B41', // Deep forest green
                    },
                    blue: {
                        light: '#A8DADC', // Soft water blue
                        DEFAULT: '#1A759F', // Lake blue
                        dark: '#184E77', // Deep ocean blue
                    },
                    earth: {
                        light: '#E9E6E1', // Cream/paper
                        DEFAULT: '#C8B8A9', // Soft sand
                        dark: '#8A7968', // Warm brown
                    },
                    accent: {
                        yellow: '#D9B44A', // Mustard yellow
                        orange: '#E07A5F', // Terracotta
                        teal: '#4DA1A9', // Teal accent
                    }
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'fade-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(15px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'shimmer': {
					'100%': {
						'background-position': '100% 0'
					}
				},
                'gentle-wave': {
                    '0%': {
                        transform: 'translateX(0) translateZ(0) scaleY(1)'
                    },
                    '50%': {
                        transform: 'translateX(-25%) translateZ(0) scaleY(0.9)'
                    },
                    '100%': {
                        transform: 'translateX(-50%) translateZ(0) scaleY(1)'
                    }
                },
                'spin-slow': {
                    '0%': {
                        transform: 'rotate(0deg)'
                    },
                    '100%': {
                        transform: 'rotate(360deg)'
                    }
                },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.7s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'shimmer': 'shimmer 2s infinite linear',
                'gentle-wave': 'gentle-wave 8s linear infinite',
                'spin-slow': 'spin-slow 20s linear infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)',
                'organic-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath fill='%233b7d59' fill-opacity='0.08' d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z'%3E%3C/path%3E%3C/svg%3E\")",
			},
            boxShadow: {
                'glass': '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.02)',
                'neo': '5px 5px 15px rgba(0, 0, 0, 0.07), -5px -5px 15px rgba(255, 255, 255, 0.5)',
                'soft': '0px 12px 25px rgba(0, 0, 0, 0.06)',
            },
            width: {
                '128': '32rem',
                '144': '36rem',
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
