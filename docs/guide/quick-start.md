# Quick Start

Once the package has been installed via Composer you can run the `checkout:install` command and follow it's instructions.

```bash
php artisan checkout:install
```

## 1. Generating the fake payment gateway.

First, it will automatically generate the `FakePaymentRequest::class` & `FakePaymentResponse::class` files. These files will allow you to leverage the `PAYMENT_TEST_MODE` either for local development or testing.

```bash
=> Fake payment gateway generated successfully!
```

## 2. Generating your payment gateway(s) of choice.

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

## 3. Providing a list of merchants.
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

## 4. Generating the payment configuration file.
As a final step, Payavel will generate your `payment.php` configuration file on your behalf. The foundation is ready, you just need to fill in the blanks.

```bash
=> The payment config has been successfully generated.
```
If you have already published the payment config file, it will be overridden.
