"use client";

import { useChangeSearchParams } from "@/hooks";
import { Paginated } from "@/types/basicTypes";
import * as Popover from "@radix-ui/react-popover";
import { HTMLAttributes, useMemo } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export type PaginationProps = HTMLAttributes<HTMLDivElement> & {
  baseUrl?: string;
  hash?: string;
  pagination: Paginated<any>;
};

export function Pagination({
  pagination,
  hash,
  baseUrl,
  ...props
}: PaginationProps) {
  const { currentPage: page, totalPages } = pagination;
  const { params, pushParams } = useChangeSearchParams(baseUrl);
  const toPage = (page: number) => pushParams({ page: page.toString() });

  const _page = useMemo(() => +(params.get("page") ?? 1), [params]);

  const firstThree = Array.from({ length: totalPages }, (_, i) => i + 1).slice(
    0,
    3,
  );
  const lastThree = Array.from({ length: totalPages }, (_, i) => i + 1)
    .slice(totalPages - 3, totalPages)
    .filter((page) => !firstThree.includes(page));

  return (
    <nav aria-label="Page navigation" {...props}>
      <ul className="flex h-10 w-fit items-center gap-3 -space-x-px text-base font-semibold">
        <li>
          <button
            disabled={page === 1}
            onClick={() => toPage(page - 1)}
            className="inline-flex items-center justify-center gap-1 p-2 text-black-500 disabled:pointer-events-none disabled:text-black-200"
          >
            <FaArrowLeftLong />
            <span className="">Prev</span>
          </button>
        </li>

        {firstThree.map((page) => (
          <li key={page}>
            <button
              onClick={() => toPage(page)}
              {...{ "data-active": page == _page }}
              className="pagination-button"
            >
              {page}
            </button>
          </li>
        ))}

        {totalPages > 6 && (
          <li>
            <Popover.Root>
              <Popover.Trigger>
                <span className="pagination-button">...</span>
              </Popover.Trigger>
              <Popover.Anchor />
              <Popover.Portal>
                <Popover.Content
                  style={{
                    maxWidth: 300,
                    maxHeight: 300,
                  }}
                >
                  <div className="flex flex-wrap gap-2 rounded-lg border bg-light p-4 shadow-2xl">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          onClick={() => toPage(page)}
                          key={page}
                          {...{ "data-active": page == _page }}
                          className="pagination-button !rounded !border"
                        >
                          {page}
                        </button>
                      ),
                    )}
                  </div>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </li>
        )}
        {lastThree.map((page) => (
          <li key={page}>
            <button
              onClick={() => toPage(page)}
              {...{ "data-active": page == _page }}
              className="pagination-button"
            >
              {page}
            </button>
          </li>
        ))}

        <li>
          <button
            disabled={page >= totalPages}
            onClick={() => toPage(page + 1)}
            className="inline-flex items-center justify-center gap-1 p-2 text-black-500 disabled:pointer-events-none disabled:text-black-200"
          >
            <span className="">Next</span>
            <FaArrowRightLong />
          </button>
        </li>
      </ul>
    </nav>
  );
}
