import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const validateJWT = async (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      throw new Error("No token found");
    }
    const decodedData: any = await jwt.verify(token, process.env.jwt_secret!);
    
    return decodedData.userId;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// import { NextRequest, NextResponse } from "next/server";
// import jwt from "jsonwebtoken";


// export const validateJWT = async (request: NextRequest, response: Response) => {
//   try {
//     const token = request.cookies.get("token")?.value;
//     if (!token) {
//       throw new Error("No token found");
//     }
//     const decodedData: any = await jwt.verify(token, process.env.jwt_secret!);

//     return decodedData.userId;
//   } catch (error: any) {
//     // If the token has expired, remove the token cookie and redirect to the login page
//     if (error.name === "TokenExpiredError") {
//       destroyCookie({ res: response }, "token"); // Remove the token cookie
//       response.writeHead(302, { Location: "/login" }); // Redirect to the login page
//       response.end();
//     } else {
//       throw new Error(error.message);
//     }
//   }
// };
