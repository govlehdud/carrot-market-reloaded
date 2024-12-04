"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import { PhotoIcon } from "@heroicons/react/24/solid";

export default function AddProduct() {
  return (
    <div>
      <form>
        <label htmlFor="photo">
          <PhotoIcon className="w-20" />
          <div className="text-neural-400 text-sm">사진을 추가해주세요.</div>
        </label>
        <input type="file" id="photo" name="photo" />
        <Input name="title" required placeholder="제목" type="text" />
        <Input name="price" required placeholder="가격" type="number" />
        <Input
          name="description"
          required
          placeholder="자세한 설명"
          type="text"
        />
        <Button text="작성완료" />
      </form>
    </div>
  );
}
