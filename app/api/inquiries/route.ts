import { receiveInquiry } from "../../../lib/inquiry-service";

export const maxDuration = 30;
export async function POST(request: Request) {
  return receiveInquiry(request);
}
