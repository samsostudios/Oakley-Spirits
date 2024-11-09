class VerifyCookie {
  private static storageKey = 'userVerification';
  private static defaultTTL = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  public static setVerificationStatus(ttl: number = VerifyCookie.defaultTTL): void {
    console.log('verified - setting cookie');
    const now = new Date();
    const verificationData = {
      verified: true,
      expiry: now.getTime() + ttl,
    };
    localStorage.setItem(VerifyCookie.storageKey, JSON.stringify(verificationData));
  }

  public static isVerified(): boolean {
    const data = localStorage.getItem(VerifyCookie.storageKey);
    if (!data) return false;

    const verificationData = JSON.parse(data) as { verified: boolean; expiry: number };
    const now = new Date();

    // If expired, remove the verification data and return false
    if (now.getTime() > verificationData.expiry) {
      localStorage.removeItem(VerifyCookie.storageKey);
      return false;
    }

    console.log('verifying....', verificationData);

    return verificationData.verified;
  }

  public static clearVerificationStatus(): void {
    console.log('removing cookie');
    localStorage.removeItem(VerifyCookie.storageKey);
  }
}

export default VerifyCookie;
