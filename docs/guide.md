# Overview

Payavel is a payments package that integrates smoothly with your Laravel application. It allows you to process payments using the providers of your choice while leveraging a single elegant api.

## Installation

Run the following command to install the package via Composer:

```bash
composer require payavel/checkout
```

## Publishing assets

You may also publish the config & migration files by running the following command. Both these files are essential for the package to function properly.

```bash
php artisan vendor:publish --provider='Payavel\Checkout\PaymentServiceProvider'
```

### Configuration

Once published, the `payment.php` config file will need to be updated as we generate payment providers & merchants along the way. More detailed information on this [here](guide/providers#configuration).

```php

return [

    'defaults' => [
        'driver' => 'config',
        'provider' => '...',
        'merchant' => '...',
    ],

    'test_mode' => env('PAYMENT_TEST_MODE', false),

    'providers' => [
        // ...
    ],

    'merchants' => [
        // ...
    ],

];

```

### Migration

The published migration defines a recommended structure that should fit perfectly with most applications, but is highly customizable since most of the data flowing through these tables will be managed by you, while the package solely depends on a small portion of the pre-defined columns in order to automate some actions.

:::warning ⚠️ When using the database driver
It is important to note that it deeply relies on the structure of the `payment_providers`, `payment_merchants` & `payment_merchant_provider` tables.
:::

Once you are done customizing you may simply run the migration just like you do it with all other migrations in Laravel.

```bash
php artisan migrate
```

## Next steps

After installing the package into your existing Laravel application you may [quickly get started](guide/quick-start) by running the `checkout:install` command which will help you generate the payment gateway skeletons & the config file so you can focus on the integration.

If you like to get into the nitty gritty & understand how things work under the hood, you may continue your setup by understanding [providers](guide/providers) & [merchants](guide/merchants) and how to configure you application to switch between them.
