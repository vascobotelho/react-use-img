# Use Img

[![npm version](https://img.shields.io/npm/v/react-use-img.svg)](https://www.npmjs.com/package/react-use-img)
[![GitHub license](https://img.shields.io/github/license/vascobotelho/react-use-img.svg)](https://github.com/vascobotelho/react-use-img/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/vascobotelho/react-use-img.svg?style=social&label=Star)](https://github.com/vascobotelho/react-use-img)

## Description

A hook for lazy loading images

## Installation

```bash
npm install react-use-img
```

## Usage

```jsx
import { useImg } from 'react-use-img';

function App() {
	const { isLoading, isError, img } = useImg('https://via.placeholder.com/56x56', 56);

	if (isLoading) return <span>Loading...</span>;

	if (isError) return <span>Error</span>;

	return <img {...img} alt="..." />
}
```

## License

MIT
