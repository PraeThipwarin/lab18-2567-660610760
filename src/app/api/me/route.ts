import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Thipwarin Seewarangkoon",
    studentId: "660610760",
  });
};
