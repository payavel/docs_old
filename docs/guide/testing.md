# Testing

If you have a large test suite you might want to prevent making api calls to your payment provider every time the pipeline runs, either to optimize the test runtime or due to the provider's sandbox limitations. You can solve this problem by setting `PAYMENT_TEST_MODE=true` in your `.env` file, which will route all your requests via the [fake payment gateway](#fake-payment-gateway).

Nevertheless, you should still have unit tests making sure the fake gateway is aligned with your provider's gateway.

```php
use Payavel\Checkout\Facades\Payment;

/** @test */
public function live_mode_authorize()
{
    config(['payment.test_mode' => false]);

    $this->runAuthorizeTest();
}

/** @test */
public function test_mode_authorize()
{
    config(['payment.test_mode' => true]);

    $this->runAuthorizeTest();
}

private function runAuthorizeTest()
{
    $response = Payment::authorize($data, $billable);

    // Test the response output.
}
```


## Fake Payment Gateway

The fake payment gateway allows you to mock payment responses in either local or testing environments.

If you didn't use the `checkout:install` command while getting started you may need to generate the fake payment gateway by running this command:

```bash
php artisan checkout:provider --fake
```

This will generate a `\App\Services\Payment\FakePaymentRequest::class` & a `\App\Services\Payment\FakePaymentResponse::class` so you can define your own mocks.

If you wish to move these files to another directory, don't forget to specify it in the config file.

```php
'fake' => [
    'request_class' => App\\Services\\Payment\\FakePaymentRequest::class,
    'response_class' => App\\Services\\Payment\\FakePaymentResponse::class,
],
```
