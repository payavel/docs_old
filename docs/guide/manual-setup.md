# Manual Setup

If you are looking to get up and running ASAP, please refer to the [quick start guide](quick-start). If you like to get into the nitty gritty & understand how things work under the hood, continue reading.

## Publishing assets

You may publish the config & migration files by running the following command. Both these files are essential for the package to function properly.

```bash
php artisan vendor:publish --provider='Payavel\Checkout\PaymentServiceProvider'
```

## Configuration

Once published, the `payment.php` config file will need to be updated as we generate payment providers & merchants along the way. More detailed information on this [here](providers#configuration).

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

    'models' => [
        \Payavel\Checkout\Models\PaymentMethod::class => \App\Models\Payment\PaymentMethod::class,
        \Payavel\Checkout\Models\Wallet::class => \App\Models\Payment\Wallet::class,
    ],

];

```

## Migration

The published migration defines a recommended structure that should fit perfectly with most applications, but is highly customizable since most of the data flowing through these tables will be managed by you, while the package solely depends on a small portion of the pre-defined columns in order to automate some actions.

:::warning ⚠️ When using the database driver
It is important to note that it deeply relies on the structure of the `payment_providers`, `payment_merchants` & `payment_merchant_provider` tables.
:::

Once you are done customizing you may simply run the migration just like you do it with all other migrations in Laravel.

```bash
php artisan migrate
```

## Generating Providers

You may continue your setup by understanding [providers](providers) & [merchants](merchants) and how to configure you application to switch between them.
