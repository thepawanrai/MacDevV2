/**
 * Web3Forms Integration Service
 * Dispatches website lead and contact inquiries directly to the configured email notification endpoint.
 */

export const WEB3FORMS_ACCESS_KEY = '952b754d-f09c-499b-9999-a579ee444317';
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export interface Web3FormsPayload {
  access_key?: string;
  name: string;
  email: string;
  message: string;
  phone?: string;
  subject?: string;
  from_name?: string;
  organization?: string;
  designation?: string;
  programInterest?: string;
  preferredFormat?: string;
  participantCount?: number | string;
  segment?: string;
  [key: string]: unknown;
}

export async function submitToWeb3Forms(
  data: Web3FormsPayload
): Promise<{ success: boolean; message?: string }> {
  try {
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      from_name: 'Mastermind Alliance Coaching Website',
      subject:
        data.subject ||
        `New Website Lead: ${data.name} (${data.programInterest || data.segment || 'General'})`,
      ...data,
    };

    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    return {
      success: response.ok && Boolean(result.success),
      message: result.message || (result.success ? 'Success' : 'Submission failed'),
    };
  } catch (err) {
    console.warn('Web3Forms lead dispatch error (deferred):', err);
    return {
      success: false,
      message: err instanceof Error ? err.message : 'Submission failed',
    };
  }
}
