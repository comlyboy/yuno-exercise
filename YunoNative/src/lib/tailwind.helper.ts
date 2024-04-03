import tw, { ClassInput, Style } from 'twrnc';

export function twClass(...className: ClassInput[]): Style {
	return tw.style(...className);
}

export function twPrefixMatch(...prefixes: string[]): boolean {
	return tw.prefixMatch(...prefixes);
}

export function twColor(color: string): string | undefined {
	return tw.color(color);
}

export function twMemoBuster(): string {
	return tw.memoBuster;
}
