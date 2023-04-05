# Quick Start

To quickly start processing payments in Laravel you may use the install command, which will publish all necessary assets, generate the payment gateway skeletons & the config file so you can focus on what's important, the integration.

Once the package has been installed, run the `checkout:install` command and follow it's instructions.

```bash
php artisan checkout:install
```

## 1. Publishing the migration.

The command will start by publishing the migration for you. This migration should have everything you need in order to start processing payments, but you may update it as you wish.

```bash
=> INFO  Publishing [migrations] assets.  

=> Copying file [vendor/payavel/checkout/src/database/migrations/2021_01_01_000000_create_base_payment_tables.php] to [database/migrations/2023_01_01_000000_create_base_payment_tables.php] DONE
```

## 2. Generating the fake payment gateway.

Then it will automatically generate the `FakePaymentRequest::class` & `FakePaymentResponse::class` files. These files will allow you to leverage the `PAYMENT_TEST_MODE` either for local development or testing.

```bash
=> Fake payment gateway generated successfully!
```

## 3. Generating your payment gateway(s) of choice.

Now you will be prompted to provide a payment service provider to be integrated into your project.

```bash
=> What payment provider would you like to add?:
> Adyen

=> How would you like to identify the Adyen payment provider? [adyen]:
> adyen
```

Once provided, it will generate the provider's request & response classes for you.

```bash
=> Adyen payment gateway generated successfully!
```

You will also be asked if you would like to add another payment provider to your project, you may specify as many as you would like, it will walk you through the process again until you have added all the providers you need.

```bash
=> Would you like to add another payment provider? (yes/no) [no]:
> no
```

## 4. Providing a list of merchants.
In this step you will be prompted to share the merchant accounts your application will be processing payments for.

```bash
=> What payment merchant would you like to add?:
> Laravel

=> How would you like to identify the Laravel payment merchant? [laravel]:
> laravel
```
You may provide as many merchants as needed, this is very helpful when your business is segregated in different areas, and you wish to keep your reporting separate.

```bash
=>  Would you like to add another payment merchant? (yes/no) [no]:
> no
```

## 5. Generating the payment configuration file.
As a final step, Payavel will generate your `payment.php` configuration file on your behalf. The foundation is ready, you just need to fill in the blanks.

```bash
=> The payment config has been successfully generated.
```
