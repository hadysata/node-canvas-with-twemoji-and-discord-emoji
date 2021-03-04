import { CanvasRenderingContext2D } from "canvas";

declare module "node-canvas-with-twemoji-and-discord-emoji" {
	export function fillTextWithTwemoji(
		context: CanvasRenderingContext2D,
		text: string,
		x: number,
		y: number,
		options?: any
	): Promise<void>;
	
	export function strokeTextWithTwemoji(
		context: CanvasRenderingContext2D,
		text: string,
		x: number,
		y: number,
		options?: any
	): Promise<void>;
	
	export function measureText(
		context: CanvasRenderingContext2D,
		text: string,
		options?: any
	): { width: number; alphabeticBaseline: number; };
}