
## About this project

This is a base Laravel project with ReactJS frontend and Laravel Sanctum API authentication. You could read more about [here](https://medium.com/@tthdvd/build-a-react-web-app-with-laravel-sanctum-part-1-login-c657d0bbbb0b).


## Installation

After you boot up this project according the [official documentation](https://laravel.com/docs/) you should install the dependencies:

`composer install`

`npm install`

And build the project:

`npm run dev`

## Docker - Sail up!
You could run this project usin Docker - Sail. Here is the [official sail documentation](https://laravel.com/docs/9.x/sail) for more info.


Run the following command to install dependencies:
```
docker run --rm \
-u "$(id -u):$(id -g)" \
-v $(pwd):/opt \
-w /opt \
laravelsail/php80-composer:latest \
composer install --ignore-platform-reqs
```

After succesful installation you could run:
`./vendor/bin/sail up`

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
