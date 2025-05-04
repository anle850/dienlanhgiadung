'use server';

export async function submitContactForm(formData: FormData): Promise<void> {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Add your form submission logic here
  // For example, sending email, saving to database, etc.
  console.log({ name, email, message });
}

export async function subscribeNewsletter(formData: FormData): Promise<void> {
  const email = formData.get('email');

  // Add your newsletter subscription logic here
  console.log({ email });
}

// Add more server actions as needed 