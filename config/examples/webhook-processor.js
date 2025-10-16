/**
 * Example Webhook Processor
 * Demonstrates Claude configuration in action
 */

import crypto from "crypto";

export class WebhookProcessor {
  constructor(secret) {
    this.secret = secret;
  }

  /**
   * Verify webhook signature
   * @param {string} payload - Raw webhook payload
   * @param {string} signature - Expected signature
   * @returns {boolean} Whether signature is valid
   */
  verifySignature(payload, signature) {
    const expectedSignature = crypto
      .createHmac("sha256", this.secret)
      .update(payload)
      .digest("hex");

    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expectedSignature)
    );
  }

  /**
   * Process webhook event
   * @param {Object} event - Webhook event data
   * @returns {Promise<Object>} Processing result
   */
  async processEvent(event) {
    try {
      // Validate event structure
      if (!event.type || !event.data) {
        throw new Error("Invalid event structure");
      }

      // Process based on event type
      switch (event.type) {
        case "user.created":
          return await this.handleUserCreated(event.data);
        case "payment.completed":
          return await this.handlePaymentCompleted(event.data);
        default:
          return { status: "ignored", reason: "Unknown event type" };
      }
    } catch (error) {
      console.error("Webhook processing error:", error);
      return {
        status: "error",
        error: error.message
      };
    }
  }

  async handleUserCreated(userData) {
    // Process user creation
    console.log(`Processing new user: ${userData.email}`);

    // Add your business logic here
    return {
      status: "processed",
      action: "user_welcome_email_sent",
      userId: userData.id
    };
  }

  async handlePaymentCompleted(paymentData) {
    // Process payment completion
    console.log(`Processing payment: ${paymentData.id}`);

    // Add your business logic here
    return {
      status: "processed",
      action: "payment_confirmation_sent",
      paymentId: paymentData.id
    };
  }
}

// Usage example:
// const processor = new WebhookProcessor(process.env.WEBHOOK_SECRET);
// const result = await processor.processEvent(event);
