'use client'
import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cva } from 'cva'

const tooltipStyle = cva({
  base: [
    'z-50 overflow-hidden rounded animate-in fade-in-0 zoom-in-95',
    'bg-background px-3 py-1.5 border border-foreground/10',
    'font-code text-[13px] font-[520]',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
    'data-[side=top]:slide-in-from-bottom-2',
    'data-[side=bottom]:slide-in-from-top-2',
    'data-[side=left]:slide-in-from-right-2',
    'data-[side=right]:slide-in-from-left-2',
  ],
})

export const TooltipProvider = TooltipPrimitive.Provider
export const Tooltip = TooltipPrimitive.Root
export const TooltipTrigger = TooltipPrimitive.Trigger
export const TooltipContent = forwardRef<
  ElementRef<typeof TooltipPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={`${tooltipStyle()} ${className}`}
    {...props}
  />
))

TooltipContent.displayName = TooltipPrimitive.Content.displayName
