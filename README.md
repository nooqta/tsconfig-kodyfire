# Welcome to tsconfig-kodyfire 👋
![Version](https://img.shields.io/badge/version-0.0.5-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/nooqta/kodyfire#install-a-kody)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/nooqta/kodyfire/blob/main/LICENSE)
[![Twitter: anis\_marrouchi](https://img.shields.io/twitter/follow/anis\_marrouchi.svg?style=social)](https://twitter.com/anis\_marrouchi)

> Generate a tsconfig file using [Kodyfire](https://github.com/nooqta/kodyfire).

### 🏠 [Homepage](https://github.com/nooqta/kodyfire)

## Requirements

tsconfig-kodyfire requires the [kodyfire-cli](https://github.com/nooqta/kodyfire) to be installed

```sh
npm install -g kodyfire-cli
```
## Install

```sh
npm install tsconfig-kodyfire
```

## Usage

### Method 1: As a generator
In order to generate your artifacts, run the `generate` command. The syntax is `kody generate|g [kody] [concept]`. If you ommit `kody` and `concept` the assistant will prompt you to select them. As an example, run the following command from your terminal:
```sh
kody generate react component
```
### Method 2: As a kody project
Refer to the kodyfire [install a kody](https://github.com/nooqta/kodyfire#install-a-kody) section.
Once your project is initialized and ready for kody,
generate your tsconfig concept using the `kody ride` command or manually. As an example, A declaration for a tsconfig concept might look like the following:
```json
	{
		"name": "next",
		"outputDir": ""
	}
``` 

After adding your concept(s) definitions, run the following command to generate your assets.

```sh
kody run -s kody-tsconfig.json
```

### Available concepts 

#### `tsconfig` 

> Generates a tsconfig file

##### Params

- `name` [__enum__](#Tsconfigs) - The tsconfig file configuration
- `outputDir` _string_ - The output directory


###### Tsconfigs
Refer to [this reference](https://github.com/tsconfig/bases/tree/main/bases) for a list of available tsconfig templates

## 📅 Future Features
- Update bases
- Add requested tsconfig

## Run tests

```sh
TODO
```

## Author

👤 **Anis Marrouchi**

* Website: https://noqta.tn
* Twitter: [@anis\_marrouchi](https://twitter.com/anis\_marrouchi)
* GitHub: [@anis-marrouchi](https://github.com/anis-marrouchi)
* LinkedIn: [@marrouchi](https://linkedin.com/in/marrouchi)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/anis-marrouchi/tsconfig-kodyfire/issues). 

## Show your support

Give a ⭐️ if this project helped you!

## Credits

- [bases](https://github.com/tsconfig/bases) for the tsconfig templates.
- [ts-config](https://github.com/nooqta/tsconfig) An npm adaption for the original [deno](https://github.com/tsconfig/bases) project 
- [kodyfire](https://github.com/nooqta/kodyfire) by [nooqta](https://github.com/nooqta) The kodyfire generator.

## 📝 License

Copyright © 2022 [Anis Marrouchi](https://github.com/anis-marrouchi).

This project is [MIT](https://github.com/nooqta/kodyfire/blob/main/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-kodyfire](https://github.com/nooqta/readme-kodyfire)_
